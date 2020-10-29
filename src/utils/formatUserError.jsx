const formatUserError = (exception) => {

  let error = exception.response.data.error

  if(error){
    if(error.match(/unique/)){
      return 'Username already taken.'
    }
  }
  else {
    return "Error"
  }
}

export default formatUserError