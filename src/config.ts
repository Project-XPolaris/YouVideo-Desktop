export const ApplicationConfig = {
  apiPaths: {
    libraryList: '/library',
    library: '/library/:id',
    scanLibrary: '/library/:id/scan',
    videoList: '/videos',
    video: '/video/:id',
    readPath: '/files',
    tasks: '/task',
    tags: '/tag',
    tagsVideo: '/tag/videos',
    videoTags: '/tag',
    tagVideos: '/tag/:id/videos',
    info: '/info',
    codec: '/codec',
    format: '/format',
    trans: '/video/:id/trans',
    userAuth: '/user/auth'
  },
  storeKey: {
    apiUrl: 'apiUrl',
    token: 'TOKEN',
    username: 'USERNAME'
  }
}
