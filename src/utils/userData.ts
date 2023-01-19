import { ReposType } from "@/components/Project";

export const userData = {
  nameUser: "Guilherme Teles",
  githubUser: "Artorys",
  linkedinUser: "guilherme-teles-alves",
  whatsappNumber: "+5527998510568",
  emailUser: "guilhermetelesdev@gmail.com",
  instagramUser: "",
  facebookUser: "",
};

interface IRepository{
  id : number
}

export function FilterRepository(listId : Array<number>,listRepository : Array<ReposType>){
  console.log(listRepository)
  listId.forEach((idExclude)=>{
      const indexRepo = listRepository.map(repo=> repo.id).indexOf(idExclude)
     listRepository.splice(indexRepo,1)
    })
  console.log(listRepository)

  return listRepository
}
