import { Link, Outlet } from "react-router-dom"
export const playList = [
    {
      id: 1,
      name: "Devara",
      releaseDate: "27 September 2024",
      displayPicture:
        "https://assets.thehansindia.com/h-upload/2023/07/19/1365933-jr-ntr.webp",
      songs: [
        {
          id: 100,
          title: "Fear Song",
          fileAddress: "devara/devara1.mp3",
        },
        {
          id: 101,
          title: "Chuttamalle",
          fileAddress: "devara/devara2.mp3",
        },
        {
          id: 102,
          title: "Red Sea",
          fileAddress: "devara/devara3.mp3",
        },
        {
          id: 103,
          title: "Ayudha Pooja",
          fileAddress: "devara/devara4.mp3",
        },
      ],
    },
    {
      id: 2,
      name: "Mirchi",
      releaseDate: "8 February 2013",
      displayPicture:
        "https://static.toiimg.com/thumb/msid-18396085,width-1070,height-580,imgsize-25969,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      songs: [
        {
          id: 104,
          title: "Barbie Girl",
          fileAddress: "mirchi/mirchi1.mp3",
        },
        {
          id: 105,
          title: "Darlingey",
          fileAddress: "mirchi/mirchi2.mp3",
        },
        {
          id: 106,
          title: "Idhedho Bagundhe",
          fileAddress: "mirchi/mirchi3.mp3",
        },
        {
          id: 107,
          title: "Yahoon Yahoon",
          fileAddress: "mirchi/mirchi4.mp3",
        },
      ],
    },
    {
      id: 3,
      name: "RRR",
      releaseDate: "24 March 2022",
      displayPicture: "https://media.mpcvfx.com/app/uploads/2022/06/RRR.jpg",
      songs: [
        {
          id: 108,
          title: "Dosti",
          fileAddress: "rrr/rrr1.mp3",
        },
        {
          id: 109,
          title: "Raamam Raaghavam",
          fileAddress: "rrr/rrr2.mp3",
        },
        {
          id: 110,
          title: "Nattu Nattu",
          fileAddress: "rrr/rrr3.mp3",
        },
        {
          id: 111,
          title: "Komma Uyyala",
          fileAddress: "rrr/rrr4.mp3",
        },
      ],
    },
    {
      id: 4,
      name: "Gabbar Singh",
      releaseDate: "11 May 2012",
      displayPicture:
        "https://sund-images.sunnxt.com/51620/640x360_Gabbarsingh_51620_32a04edd-372f-4ef0-875d-b489a78d4f5d.jpg",
      songs: [
        {
          id: 112,
          title: "Dekho Dekho Gabbar Singh",
          fileAddress: "gabbar/gabbar1.mp3",
        },
        {
          id: 113,
          title: "Kevvu Keka",
          fileAddress: "gabbar/gabbar2.mp3",
        },
        {
          id: 114,
          title: "Dil Se",
          fileAddress: "gabbar/gabbar3.mp3",
        },
        {
          id: 115,
          title: "Pillaa",
          fileAddress: "gabbar/gabbar4.mp3",
        },
      ],
    },
];
export const MoviesList = function(){
    return <div className="moviesList">
        {playList.map((item)=>{
            return <Link key={item.id} className="movie" to={`movie/${item.id}`}>
                <img src={item.displayPicture} alt="Image failed to load"/>
                <h3>{item.name}</h3>
                <p>{item.releaseDate}</p>
            </Link>
        })}
    </div>
}