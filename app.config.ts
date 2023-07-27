export default defineAppConfig({
  alpine: {
    title: 'I am Kilroy',
    description: 'A blog about anarchy, hacking and what ever pops into my head randomly.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo4.svg', // path of the logo
        pathDark: '/logo-dar4k.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Kilroy' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://git.sturtz.io/darthkilroy/blog'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      youtube: '@darthkilroy',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
