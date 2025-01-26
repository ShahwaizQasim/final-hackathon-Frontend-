import { useEffect, useState } from "react";

function ViewUsers() {

  // const [getUser, setGetUser] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   UsersGet()
  // }, [])

  // const UsersGet = async () => {
  //   try {
  //     const UserCollection = collection(db, 'Users');
  //     const q = query(UserCollection)
  //     const arr = [];
  //     setLoading(true);
  //     const docs = await getDocs(q);
  //     docs.docs.forEach((users) => {
  //       return arr.push({ ...users.data(), id: users.id });
  //     });
  //     setGetUser([...arr]);
  //   } catch (error) {
  //     console.log("error in viewUsers", error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // console.log("getUser", getUser);

  return (

    <section id="users-section" className="section" >
      <h2 style={{
        fontFamily: 'poppins',
        marginTop: '50px'
      }}>Manage Users</h2>
      <table className="mt-5">
        <thead>
          <tr style={{
            fontFamily: 'poppins'
          }}>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Updates User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shahwaiz Qasim</td>
            <td>syed@gmail.com</td>
            <td>Admin</td>
            <td><button>Edit</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ViewUsers;