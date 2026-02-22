import Card from './components/card'

const App = () => {
  const jobs = [
    {
      id: 1,
      logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full-Time",
      tag2: "Senior",
      pay: 120,
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
      company: "Google",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Remote",
      tag2: "Mid-Level",
      pay: 95,
      location: "Bangalore, India",
    },
    {
      id: 3,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0dDdi3KJgMq_87aJt9us_0yh69ewaKgUzg&s",
      company: "Microsoft",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "Senior",
      pay: 110,
      location: "Hyderabad, India",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?20220806170125",
      company: "Netflix",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Part-Time",
      tag2: "Junior",
      pay: 60,
      location: "Remote",
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa-ZEmjHFcQSx3HMDkP5_lziPQzDfvs_klQ&s",
      company: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Mid-Level",
      pay: 105,
      location: "Pune, India",
    },
    {
      id: 6,
      logo: "https://static.vecteezy.com/system/resources/previews/046/861/643/non_2x/meta-icon-transparent-background-free-png.png",
      company: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Senior",
      pay: 115,
      location: "Remote",
    },
    {
      id: 7,
      logo: "https://s3-alpha.figma.com/hub/file/2734964093/9f5edc36-eb4d-414a-8447-10514f2bc224-cover.png",
      company: "Spotify",
      datePosted: "2 days ago",
      post: "UI Designer",
      tag1: "Part-Time",
      tag2: "Junior",
      pay: 55,
      location: "Delhi, India",
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
      company: "Uber",
      datePosted: "3 weeks ago",
      post: "Mobile App Developer",
      tag1: "Full-Time",
      tag2: "Senior",
      pay: 100,
      location: "Bangalore, India",
    },
    {
      id: 9,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdidmgfVbI34U_GS2ZwUn5IS9M-ciAlr7Cjw&s",
      company: "Airbnb",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Mid-Level",
      pay: 90,
      location: "Remote",
    },
    {
      id: 10,
      logo: "https://cdn-icons-png.flaticon.com/512/5436/5436949.png",
      company: "Adobe",
      datePosted: "8 days ago",
      post: "UX Researcher",
      tag1: "Full-Time",
      tag2: "Senior",
      pay: 98,
      location: "Noida, India",
    },
  ];

  console.log(jobs);

  return (
    <div className='parent'>
      {jobs.map((job) => {
        return <Card 
        key={job.id}
        logo={job.logo}
        company={job.company}
        datePosted={job.datePosted}
        post={job.post}
        tag1={job.tag1}
        tag2={job.tag2}
        pay={job.pay}
        location={job.location}
        />
      })}
    </div>
  )
}

export default App
