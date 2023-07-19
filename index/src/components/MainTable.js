import React from 'react';
import './MainTable.css'
import { Link } from 'react-router-dom';
import { FaChartLine, FaEye } from 'react-icons/fa'

const MainTable = () => {
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
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 2</th>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 3</th>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 4</th>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 5</th>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
            <button>
            <FaChartLine/>
            </button>
          </Link>
        </td>
        </tr>
        <tr>
        <th scope="row">Container 6</th>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td>y</td>
        <td> 
          <Link to='/details'>
            <button>
            <FaEye/>
            </button>
          </Link>
        </td>
        <td> 
          <Link to='/chart'>
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
