import "./App.css";
import Member from "./Components/Member";

function App() {
  const users = [
    {
      id: 1,
      name: "Sarah Ahmed",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      role: "Admin",
    },
    {
      id: 2,
      name: "John Miller",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      role: "Editor",
    },
    {
      id: 3,
      name: "Ayesha Siddiqua",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      role: "Moderator",
    },
    {
      id: 4,
      name: "Michael Clark",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      role: "Subscriber",
    },
    {
      id: 5,
      name: "Nadia Islam",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      role: "User",
    },
    {
      id: 6,
      name: "David Johnson",
      img: "https://randomuser.me/api/portraits/men/6.jpg",
      role: "Editor",
    },
    {
      id: 7,
      name: "Rafiul Hasan",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      role: "Admin",
    },
    {
      id: 8,
      name: "Maliha Chowdhury",
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      role: "User",
    },
    {
      id: 9,
      name: "Tanvir Rahman",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      role: "Moderator",
    },
    {
      id: 10,
      name: "Farzana Haque",
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      role: "Subscriber",
    },
  ];

  return (
    <>
      <div className="min-h-screen p-6 max-w-screen-xl mx-auto">
        <h2 className="text-center font-semibold text-blue-600 text-3xl mb-6">
          Team Member List App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
          users.map(user => <Member 
            key={user.id}
             name = {user.name}
              role= {user.role}
               image={user.img}/>
              )

        }
        </div>
      </div>
    </>
  );
}

export default App;
