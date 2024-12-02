import { Timeline } from "antd";

export const getSelectedProject = (projectList : any, projectId : string) => {

    for(let x = 0; x < projectList.length; x++){
        if(projectList[x].id == projectId){
            return projectList[x];            
        }
    }

    return null;
}

export const userValidationHandler = (currenctUserId : string, authorizedUsers : Array<string>) : boolean =>  {
    for(let x = 0; x < authorizedUsers.length; x++){
        if(currenctUserId == authorizedUsers[x]){
            return true;
        }
    }
    return false;
}


export const JWTDecoder = (token : any) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
  };

export const techStackHandler = (techStack : Array<string>) : Array<object> => {
    const items = techStack?.map((technology : string)=>{
        return {
            children : technology
        }
    })

    console.log("F1",items);
    return items;
}


