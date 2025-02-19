//Javascript-Axios Lab

// 4. Change all of your fetch() functions to axios!
//  * - axios has already been imported for you within index.js.
//  * - If you've done everything correctly up to this point, this should be simple.
//  * - If it is not simple, take a moment to re-evaluate your original code.
//  * - Hint: Axios has the ability to set default headers. Use this to your advantage
//  *   by setting a default header with your API key so that you do not have to
//  *   send it manually with all of your requests! You can also set a default base URL!
//  */
// /**
//  * 5. Add axios interceptors to log the time between request and response to the console.
//  * - Hint: you already have access to code that does this!
//  * - Add a console.log statement to indicate when requests begin.
//  * - As an added challenge, try to do this on your own without referencing the lesson material.
//  */

/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar element has already been created for you.
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar element to 0%.
 *  - This is to reset the progress with each request.
 * - Research the axios onDownloadProgress config option.
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */

/**
 * 7. As a final element of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body element's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body element.
 */
/**
// const API_KEY =
//   "live_fNLd6EHXHSKibQPtMJo9ktM1OjTPmXPKqRdF5d1h1v6hJqU1ShFdHHqkKhBJgrqQ";

// axios.defaults.headers.common['x-api-key'] = API_KEY;
//     axios.defaults.baseURL = "https://api.thecatapi.com/v1";
//     // const breedId = breedSelect.value;
//     const res = await axios.get("/images/search", {
//         params:{
//             limit:10,
//             breed_ids:breedSelect.value
//         }
//     });

    // async function breedSelection(`https://api.thecatapi.com/vi/images) {
    //     try{
    //         const res =await axios.get()
    // const imgs =res.data
    // imgs.forEach((img)) => {
// createCarouselItem.appendCarousel(Carousel.createCarouselItem
    // }
    //     }
    // }
    */
