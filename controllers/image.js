const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const create = async (req, res) => {
    const {prompt ,size} =req.body;
    const imgSize= size==='small' ? '256x256' : size=== 'medium'? '512x512': '1024x1024';
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size:imgSize
          });
          const imageUrl=response.data.data[0].url;
          res.status(200).json({
            success:true,
            data:imageUrl
          })
         // console.log(completion.data.choices[0].text);
          
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }

       res.status(400).json({
        success:false,
        error:'The img couldnt be generated'
       })
    } 
   
}


module.exports = {
    create,
}