import { useState } from 'react'
import { createModel } from 'hox'
import { createLibrary, fetchLibraryList, Library, removeLibrary, scanLibrary } from '../../../api/library'

function HomeLibraryModel () {
  const [libraryList, setLibraryList] = useState<Library[]>([])
  const loadLibrary = async () => {
    const response = await fetchLibraryList({})
    setLibraryList(response.result)
  }
  const create = async (path:string) => {
    await createLibrary(path)
    await loadLibrary()
  }
  const scan = async (id : number) => {
    await scanLibrary(id)
  }
  const remove = async (id : number) => {
    await removeLibrary(id)
    await loadLibrary()
  }
  return {
    libraryList, loadLibrary, create, scan, remove
  }
}
const useHomeLibraryModel = createModel(HomeLibraryModel)
export default useHomeLibraryModel
