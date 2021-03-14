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
    tagVideos: '/tag/:id/videos'
  },
  storeKey: {
    apiUrl: 'apiUrl'
  }
}
