const TableList = ({handleOpen}) => {
  const clients = [
    {
      id: 1,
      name: "Arman hossian",
      email: "web.devarman@gmail.com",
      job: "web developer",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "Jony hossian",
      email: "jony@gmail.com",
      job: "web developer2",
      rate: "90",
      isActive: true,
    },
    {
      id: 3,
      name: "Sakib hossian",
      email: "sakib@gmail.com",
      job: "web developer3",
      rate: "80",
      isActive: false,
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table mx-auto w-[90%] mt-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {clients.map((client) => (
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <div
                    className={`btn rounded-full w-20 ${
                      client.isActive ? "btn-primary" : "btn-error"
                    }`}
                  >
                    {client.isActive ? "Active" : "Inactive"}
                  </div>
                </td>
                <td>
                  <button className="btn btn-secondary rounded-full" onClick={() => handleOpen('Edit')}>Update</button>
                </td>
                <td>
                  <button className="btn btn-accent rounded-full">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
