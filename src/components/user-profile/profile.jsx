// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Label } from "@/components/ui/label"

// function ProfileComponent() {

//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     username: "johndoe",
//     email: "john@example.com",
//     bio: "Developer & Blogger",
//     website: "https://example.com"
//   })

//   const [edit, setEdit] = useState(false)

//   function handleChange(e) {
//     setProfile({ ...profile, [e.target.name]: e.target.value })
//   }

//   return (

//     <div className="max-w-2xl mx-auto py-10">

//       <Card>

//         <CardHeader className="flex flex-row items-center gap-4">

//           <Avatar className="w-16 h-16">
//             <AvatarImage src="/avatar.png" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>

//           <div className="flex-1">
//             <CardTitle>{profile.name}</CardTitle>
//             <p className="text-sm text-gray-500">@{profile.username}</p>
//           </div>

//           <Button
//             variant="outline"
//             onClick={() => setEdit(!edit)}
//           >
//             {edit ? "Cancel" : "Edit"}
//           </Button>

//         </CardHeader>

//         <CardContent className="space-y-4">

//           <div className="space-y-2">
//             <Label>Name</Label>
//             <Input
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               disabled={!edit}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Username</Label>
//             <Input
//               name="username"
//               value={profile.username}
//               onChange={handleChange}
//               disabled={!edit}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Email</Label>
//             <Input
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               disabled={!edit}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Website</Label>
//             <Input
//               name="website"
//               value={profile.website}
//               onChange={handleChange}
//               disabled={!edit}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Bio</Label>
//             <Input
//               name="bio"
//               value={profile.bio}
//               onChange={handleChange}
//               disabled={!edit}
//             />
//           </div>

//           {edit && (
//             <Button className="w-full">
//               Save Profile
//             </Button>
//           )}

//         </CardContent>

//       </Card>

//     </div>
//   )
// }

// export default function ProfilePage() {
//   return <ProfileComponent />
// }




// import { useState } from "react"

// export default function Profile() {

//   const [edit, setEdit] = useState(false)

//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     username: "johndoe",
//     email: "john@example.com",
//     website: "https://example.com",
//     bio: "Frontend developer and blogger."
//   })

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (

//     <div className="max-w-2xl mx-auto p-6">

//       <div className="bg-white border rounded-xl shadow-sm p-6">

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">

//           <img
//             src="https://i.pravatar.cc/150"
//             className="w-16 h-16 rounded-full"
//           />

//           <div className="flex-1">
//             <h2 className="text-xl font-semibold">{profile.name}</h2>
//             <p className="text-gray-500 text-sm">@{profile.username}</p>
//           </div>

//           <button
//             onClick={() => setEdit(!edit)}
//             className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
//           >
//             {edit ? "Cancel" : "Edit"}
//           </button>

//         </div>


//         {/* Form */}
//         <div className="space-y-4">

//           <div>
//             <label className="text-sm text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               disabled={!edit}
//               className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={profile.username}
//               onChange={handleChange}
//               disabled={!edit}
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               disabled={!edit}
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Website</label>
//             <input
//               type="text"
//               name="website"
//               value={profile.website}
//               onChange={handleChange}
//               disabled={!edit}
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Bio</label>
//             <textarea
//               name="bio"
//               value={profile.bio}
//               onChange={handleChange}
//               disabled={!edit}
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//             />
//           </div>

//           {edit && (
//             <button className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90">
//               Save Profile
//             </button>
//           )}

//         </div>

//       </div>

//     </div>
//   )
// }


import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

export default function Profile() {

  const [edit, setEdit] = useState(false)
  const loginUserId = useSelector((store) => store.authState)
  const navigate = useNavigate()

  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    website: "https://example.com",
    bio: "Frontend developer and blogger."
  })
  const [image, setImage] = useState("https://i.pravatar.cc/150")

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }
  useEffect(() => {
    if (!loginUserId?.userData?.$id) {
      navigate('/login')
      return
    }
    setProfile({
      name: loginUserId?.userData?.name || "John Doe",
      username: loginUserId?.userData?.username || "johndoe",
      email: loginUserId?.userData?.email || "john@example.com",
      website: loginUserId?.userData?.website || "https://example.com",
      bio: loginUserId?.userData?.bio || "Frontend developer and blogger.",
    })
  }, [])


  return (

    <div className="max-w-2xl mx-auto p-6">

      <div className="bg-white border rounded-xl shadow-sm p-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">

          <div className="relative">

            <img
              src={image}
              className="w-16 h-16 rounded-full object-cover"
            />

            {edit && (
              <label className="absolute bottom-0 right-0 bg-black text-white text-xs px-2 py-1 rounded cursor-pointer">
                Edit
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}

          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-500 text-sm">@{profile.username}</p>
          </div>

          <button
            onClick={() => setEdit(!edit)}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
          >
            {edit ? "Cancel" : "Edit"}
          </button>

        </div>


        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!edit}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              disabled={!edit}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!edit}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Website</label>
            <input
              type="text"
              name="website"
              value={profile.website}
              onChange={handleChange}
              disabled={!edit}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              disabled={!edit}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          {edit && (
            <button className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90">
              Save Profile
            </button>
          )}

        </div>

      </div>

    </div>
  )
}