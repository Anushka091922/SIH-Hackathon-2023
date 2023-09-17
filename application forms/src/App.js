import logo from './logo.svg';
import './App.css';

function App() {


  const data = [
    {
      id:1,
      application: 'Birth Certificate',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlhealth'
    },
    {
      id:2,
      application: 'Marriage Registration',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlmarriagetab'
    },
    {
      id:3,
      application: 'Admission In Public School',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlSchool'
    },
    {
      id:4,
      application: 'Death Certificate',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlhealth'
    },
    {
      id:5,
      application: 'Complaints Registration',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg'
    },
    {
      id:6,
      application: 'Cyber Security',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlcybercfcserv'
    },
    {
      id:7,
      application: 'Right To Information',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qluserguide'
    },
    {
      id:8,
      application: 'Tree Trimming Application',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlTreeTrimmApp'
    },
    {
      id:9,
      application: 'Swimming Pool Application',
      link:'https://swimmingpool.mcgm.gov.in/membership-form'
    },
    {
      id:10,
      application: 'RTI Status',
      link:'https://www.mcgm.gov.in/irj/portal/anonymous/qlOnlineRTIsta'
    }
    
    ]
  return (
    <div className="container" >

      <h1>Application Forms Provided By Muncipality</h1>
      <table>

        <thead>
          <tr>
            <th>Name of Application Form </th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.application}</td>
                <td> <a href={item.link}>Click here</a> </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default App;
