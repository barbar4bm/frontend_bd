import React, { useEffect, useState } from 'react';
import './MainTable.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaChartLine, FaEye } from 'react-icons/fa'

const MainTable = () => {
  const [items, setitems] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/items')
        .then((res) => setitems(res.data.items));
    }, []);

    if(items === null) return <div>Loading</div>;

  return (
    <table className="MainTable">
      <thead>
        <tr>
        <th scope="col"> </th>
        <th scope="col"> Sensor 1</th>
        <th scope="col"> Sensor 2</th>
        <th scope="col"> Sensor 3</th>
        <th scope="col"> Sensor 4</th>
        <th scope="col"> Sensor 5</th>
        <th scope="col"> Details</th>
        <th scope="col"> Chart</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th scope="row">Container 1</th>
        <td>{items[0].temperature}°C</td>
        <td>{items[0].temperature}°C</td>
        <td>{items[0].temperature}°C</td>
        <td>{items[0].temperature}°C</td>
        <td>{items[0].temperature}°C</td>
        <td> 
          <Link to='/details/1'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/1'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 2</th>
        <td>{items[1].temperature}°C</td>
        <td>{items[1].temperature}°C</td>
        <td>{items[1].temperature}°C</td>
        <td>{items[1].temperature}°C</td>
        <td>{items[1].temperature}°C</td>
        <td> 
          <Link to='/details/2'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/2'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 3</th>
        <td>{items[2].temperature}°C</td>
        <td>{items[2].temperature}°C</td>
        <td>{items[2].temperature}°C</td>
        <td>{items[2].temperature}°C</td>
        <td>{items[2].temperature}°C</td>
        <td> 
          <Link to='/details/3'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/3'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 4</th>
        <td>{items[3].temperature}°C</td>
        <td>{items[3].temperature}°C</td>
        <td>{items[3].temperature}°C</td>
        <td>{items[3].temperature}°C</td>
        <td>{items[3].temperature}°C</td>
        <td> 
          <Link to='/details/4'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/4'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 5</th>
        <td>{items[4].temperature}°C</td>
        <td>{items[4].temperature}°C</td>
        <td>{items[4].temperature}°C</td>
        <td>{items[4].temperature}°C</td>
        <td>{items[4].temperature}°C</td>
        <td> 
          <Link to='/details/5'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/5'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 6</th>
        <td>{items[5].temperature}°C</td>
        <td>{items[5].temperature}°C</td>
        <td>{items[5].temperature}°C</td>
        <td>{items[5].temperature}°C</td>
        <td>{items[5].temperature}°C</td>
        <td> 
          <Link to='/details/6'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart/6'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MainTable;
