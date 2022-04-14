Vue.createApp({
  data() {
    return {
      message: "Hajimemashite!",
      header: {
        title: "Aula Zahra",
        description:
          "Disini saya berbagi pengalaman tentang perjalanan dikehidupan saya sebagai atlet dan mahasiswa.",
        social: {
          ig: {
            url: "https://www.instagram.com/al.zhra_/?hl=id",
            title: "al.zhra_",
          },
          fb: {
            url: "https://m.facebook.com/lala.kumai",
            title: "Aula Zahra",
          },
          yt: {
            url: "https://www.youtube.com/channel/UChKGaehqhuUnS5fagoj4OoQ",
            title: "Aula Zahra",
          },
        },
        imageProfile:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9-tHlCcN4Kgv0wMpJDLnMNcxHytOES1FjXxhRxSv3M9ygIKFEfkfY4Ay4QQeequnDtxHyfefFX94OaLP2kSmI1QN6inWnRAgGmt5EEjsYMZgJO72hChRyED7L9riyYUho2LygCYUZFWZTdjdzFbd8FxKTDr_DACUqbND9md4fnsEv5bioexAXD36Z/s867/Profil.jpeg",
      },
      articles: [
        {
          title: 'The Magic of Vue',
          description: "This is your first looping using Vue",
          thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        }
      ]
    };
  },
  mounted:()=>{    
    axios.get("./contents/header.json")
    .then((res)=>{
      console.log(res.data());
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}).mount("#app");