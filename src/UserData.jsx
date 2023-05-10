const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {score} = curUser;
                    const {id} = curUser.show;
                    const {url} = curUser.show;
                    const {name,type,language} = curUser.show;
                   
                    // const {street, city, zipcode} = curUser.address;


                    return (
                        <tr >
                            <td>{id}</td>
                            <td>{score}</td>
                            <td>{url}</td>
                            <td>{name},{type},{" "}{language}</td>
                            
                            
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;