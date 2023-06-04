import create from 'zustand';

type EditedTask = {
  id: string;
  title: string | null;
};
type LoginUser = {
  id: string | undefined;
  email: string | undefined;
};

type State = {
  editedTask: EditedTask;
  updateEditedTask: () => void;
  loginUser: LoginUser;
  updateLoginUser: (payload: LoginUser) => void;
  resetLoginUser: () => void;
};

// const useStore = create<State>((set) => ({
//   editedTask:{id:'',title:''},
// }))

// export default useStore
