import React, { useState } from 'react';
import AppModule from '../models/app-module';
import User from '../models/user';
import findAllDegree from '../util/searchDFS';

const AppContext = React.createContext<AppModule>({
  users: [],
  graph: [],
  output: [],
  alert: {
    hasAlert: false,
    variant: '',
    description: '',
  },
  hasOutput: false,
  searchedUsers: [],
  onNewUserEntry: (user: User) => {},
  onNewRelationshipEntry: (user1: string, user2: string) => {},
  onSearch: (user1: string, user2: string) => {},
});

const initData = {
  users: [
    new User('Sameer'),
    new User('Aayushi'),
    new User('Bhaskar'),
    new User('Kamalnath Sharma'),
    new User('Shanti Kumar Saha'),
  ],
  graph: [[1, 3], [2], [], [4], [2]],
};

export const AppContextProvider: React.FC = (props) => {
  const [users, setUsers] = useState<User[]>(initData.users);
  const [graph, setGraph] = useState<number[][]>(initData.graph);
  const [output, setOutput] = useState<number[][]>([]);
  const [hasOutput, setHasOutput] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    hasAlert: boolean;
    variant: string;
    description: string;
  }>({
    hasAlert: false,
    variant: '',
    description: '',
  });
  const [searchedUsers, setSearchedUsers] = useState<string[]>([]);

  const newUserEntryHandler = (user: User) => {
    const findUser = users.find((u) => u.name === user.name);
    if (findUser) {
      setAlert({
        hasAlert: true,
        variant: 'danger',
        description: `'${user.name}' already is here !! 😟 Please try with some other name`,
      });
      return;
    }
    setUsers((prev) => [...prev, user]);
    setGraph((prev) => [...prev, []]);
    setAlert({
      hasAlert: true,
      variant: 'success',
      description: `New User - '${user.name}' is addedd successfully !! 😃`,
    });
  };

  const newRelationshipEntryHandler = (user1: string, user2: string) => {
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    const findRelation = graph[user1Index].find(
      (uindex) => uindex === user2Index
    );
    if (findRelation) {
      setAlert({
        hasAlert: true,
        variant: 'danger',
        description: `'${user1}' is already a Friend of '${user2}' !! 😅`,
      });
      return;
    }
    setGraph((prev) => {
      const prevGraph = [...prev];
      prevGraph[user1Index].push(user2Index);
      return prevGraph;
    });
    setAlert({
      hasAlert: true,
      variant: 'success',
      description: `'${user1}' is now a Friend of '${user2}' !! 🤗`,
    });
  };

  const onSearchHandler = (user1: string, user2: string) => {
    setAlert({
      hasAlert: false,
      variant: '',
      description: '',
    });
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    const res = findAllDegree(user1Index, user2Index, graph);
    setHasOutput(true);
    setOutput(res);
    setSearchedUsers([user1, user2]);
  };

  return (
    <AppContext.Provider
      value={{
        users: users,
        graph: graph,
        hasOutput: hasOutput,
        output: output,
        alert: alert,
        searchedUsers: searchedUsers,
        onNewUserEntry: newUserEntryHandler,
        onNewRelationshipEntry: newRelationshipEntryHandler,
        onSearch: onSearchHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
