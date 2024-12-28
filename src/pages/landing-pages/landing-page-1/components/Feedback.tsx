import ReviewCard from './ReviewCard'

const Feedback = () => {

  const reviews = [
    { id: 1, name: "Sarah Thompson", text: "The program was incredibly effective and well-rounded! The drills specifically focused on improving my speed and coordination, which are key areas for my sport. I noticed a significant improvement in my performance within a few sessions. ", coach:'David Miller', position: 'Conditioning Coach', rating: 5, image: 'https://img.freepik.com/free-photo/close-up-photo-amazing-curly-african-girl-pink-background-wearing-green-trendy-jacket_273443-55.jpg?t=st=1734631914~exp=1734635514~hmac=5ba197014b696d9fe3ec4eaaf0b493b21615a2791fe731d53bad452ce22c9f98&w=900' },
    {id: 2, name: "Michael Rodriguez", text: "This program exceeded my expectations. The focus on both technique and endurance helped me become more efficient and resilient during gameplay. The sessions were intense yet thoughtfully structured, ensuring I never felt overwhelmed.", coach:'Emily Carter', position: 'Fitness Trainer', rating: 5, image:'https://img.freepik.com/free-photo/fashionable-man-posing_144627-28355.jpg?t=st=1734632423~exp=1734636023~hmac=2875e9efb073a98a386a1959df01d2d26a968f5841deb2be25e585df511a070c&w=360', imgClass:'bg-'},
  ];
  return (
    <div className='px-8 md:px-16 py-12 md:py-20 '>
        <h3 className='text-4xl md:text-6xl font-bold mb-10 md:w-3/4 text-center mx-auto'>
          Hear from Our Thriving Sports Community
        </h3>
        <div className='flex flex-col gap-10'>
        {reviews.map((review) => (
          <ReviewCard key={review.id} comment={review.text} reviewerName={review.name} trainerName={review.coach} position={review.position} imgUrl={review.image}/>
        ))}
        </div>
    </div>
  )
}

export default Feedback