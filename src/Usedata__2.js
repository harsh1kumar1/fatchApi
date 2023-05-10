const UserData__2 = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id} = curUser.show;
                    const {summary} = curUser.show;
                   
                    // const {street, city, zipcode} = curUser.address;


                    return (
                        <tr >
                            <td>{id}</td>
                            <td>{summary}</td>
                            
                            
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData__2;