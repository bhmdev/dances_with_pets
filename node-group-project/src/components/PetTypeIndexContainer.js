import React, { useState, useEffect } from "react"

import PetTypeTile from "./PetTypeTile"

const ArticlesIndexContainer = props => {
  const [pets, setPets] = useState([])

  // Fetch all articles
  useEffect(() => {
    fetch('/api/v1/pets')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        setPets(body.petTypes);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  },[])

  const petTypeTiles = pets.map(petType => {
    return (
      <PetTypeTile
        key={petType.id}
        name={petType.pet_type_name}
        thumbnail={petType.pet_type_thumbnail_url}
        category={petType.pet_category_name}
        breed={petType.pet_breed_name}
        description={petType.description}
      />
    )
  })

  return (
      <div className="row">
      <div className="small-8 small-centered columns">
        <h1>View our pet types!</h1>
        <hr />
        {petTypeTiles}
      </div>
    </div>
  )
}

export default ArticlesIndexContainer



// const petTypeTiles = pets.map(petType, index => {
// key={index+1}



  // import ArticleTile from "./ArticleTile"
  // import ArticleFormContainer from "./ArticleFormContainer"
    // // FETCH POST LOGIC
    // const handleArticleFormSubmission = payload => {
    //   fetch('/api/v1/articles', {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: {'Content-Type': 'application/json'}
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       let errorMessage = `${response.status} (${response.statusText})`,
    //        error = new Error(errorMessage);
    //       throw(error);
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(body => {
    //     setArticles([...articles, body.article]);
    //   })
    //   .catch(error => console.error(`Error in fetch: ${error.message}`));
    // }

  // const articleTiles = articles.map(article => {


{/* <ArticleFormContainer handleFormSubmission={handleArticleFormSubmission} /> */}