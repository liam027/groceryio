const formatUserError = (error) => {
  if(error.match(/unique/)){
    return 'Username already taken.'
  }
}

export default formatUserError