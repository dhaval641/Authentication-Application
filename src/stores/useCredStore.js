import create from "zustand";

export default create((set) => ({
  clientId: '411578301421-mln2nn5sc7jb1edp79j07p0o1e76llcs.apps.googleusercontent.com',
  isLogedIn: false,
  ProfileImage: null,
  ProfileName: null,
  ProfileFName: null,
  ProfileLName: null,
  ProfileEmail: null,
  ProfilePhone: null,
  ProfileBio: null,
  isEditOn: false,
  isSaveSuccess: false,
  isUpdatePassword: false,
  errorDetails: null,

  setErrorDetails: (error) =>
  set(() => {
    return {
      errorDetails: error,
    };
  }),


  setLoginStatus: (loginState) =>
    set(() => {
      return {
        isLogedIn: loginState,
      };
    }),

  setUpdatePassword: (passState) =>
    set(() => {
      return {
        isUpdatePassword: passState,
      };
    }),

  setEditStatus: (editStatus) =>
    set(() => {
      return {
        isEditOn: editStatus,
      };
    }),
  setSaveStatus: (saveStatus) =>
    set(() => {
      return {
        isSaveSuccess: saveStatus,
      };
    }),

  setProfileName: (name) =>
    set(() => {
      return {
        ProfileName: name,
      };
    }),
  
  setProfileFName: (fname) =>
    set(() => {
      return {
        ProfileFName: fname,
      };
    }),

  setProfileLName: (lname) =>
    set(() => {
      return {
        ProfileLName: lname,
      };
    }),

  setProfileEmail: (email) =>
    set(() => {
      return {
        ProfileEmail: email,
      };
    }),

  setProfilePhone: (phone) =>
    set(() => {
      return {
        ProfilePhone: phone,
      };
    }),

  setProfileBio: (bio) =>
    set(() => {
      return {
        ProfileBio: bio,
      };
    }),

  setProfileImage: (image) =>
    set(() => {
      return {
        ProfileImage: image,
      };
    }),

//   showIsRequestPending: (isShow) =>
//     set(() => {
//       return {
//         isRequestPending: isShow,
//       };
//     }),

//   toggleAddTeacherSelection: () =>
//     set((state) => {
//       return {
//         isAddTeacherSelected: !state.isAddTeacherSelected,
//       };
//     }),

//   toggleRemoveTeacherSelection: () =>
//     set((state) => {
//       return {
//         isRemoveTeacherSelected: !state.isRemoveTeacherSelected,
//       };
//     }),

//   setSelectedTeacher: (teacher) =>
//     set(() => {
//       return {
//         selectedTeacher: teacher,
//       };
//     }),

//   setOrgProfile: (profile) =>
//     set(() => {
//       return { orgProfile: profile };
//     }),
}));
