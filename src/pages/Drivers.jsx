import { useEffect, useMemo,useState } from "react";
import axios from "axios";
import Drivertable from "../drivertable/DriverTable";
import Api_Source from "../api_source/Api_Source";
import Form from "../form/Form";
import Header from "../components/Header";
import Modal from "../modal/Modal";


function Drivers (){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    const columns = useMemo(() =>[{

        Header : "Driver Info",
        columns: [
            {
                Header: "firstName",
            accessor: "firstName",
          },
          {
               Header: "lastName",
               accessor: "lastName"

          },
          {
            Header: "Address",
            accessor: "Address",
          },
          {
            Header: "Contact_Number",
            accessor: "Contact_Number",
          },
          {
            Header: "cnic",
            accessor: "cnic",
          },
          {
            Header: "Action",
            accessor: "Action",
          },
        ],


    },
    ],
    []
  );

    // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);


  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    fetchDrivers();
}, []);

const fetchDrivers = async () => {
  axios.get('http://localhost:3000/drivers')
  .then(response => {
    setData(response.data); // Store the fetched data in state
    console.log("data",response.data);
  })
  .catch(error => {
    console.error('Error fetching drivers:', error);
  });
}

const handleAddDriver = async (newDriver) => {
  console.log('new drivers',newDriver);
  try {
       //onAddDriver(newDriver);

      const data= {...newDriver , Contact_Number: parseInt(newDriver.Contact_Number)}
       const response = await axios.post('http://localhost:3000/drivers',data);
       console.log("respose",response)
      fetchDrivers(); 
    
  } catch (error) {
    console.error('Error creating driver:', error);
  }
};

return (
  
   <div>
     
    <Header onClick={toggleModal} />
    {
      isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {/* Content inside the modal */}
      <h2>Add Driver</h2>
      <Form onAddDriver={handleAddDriver} />
      
      <button onClick={toggleModal}>Close Modal</button>
    </Modal>
    }
    
    <div>
    <Drivertable columns={columns} data={data}/>
    </div>
   </div>

)
}

export default Drivers;