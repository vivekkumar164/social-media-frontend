import * as UploadApi from '../api/uploadRequest'

export const uploadImage = (data=> async(dispatch)=>{
    try {
        await UploadApi.imageUpload(data);
    } catch (error) {
        console.log('error',error)
    }
})

export const uploadPost = (data)=> async(dispatch)=>{
    dispatch({type: "UPLOAD_START"})
    try {
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type: "UPLOAD_SUCCESS",data:newPost.data})
    } catch (error) {
        console.log('error',error);
        dispatch({type: "UPLOAD_FAIL"})
    }
}