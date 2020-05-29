import React from "react"

export default () => {
  return (
    <div className="w-full">
      <div className="w-3/4 ml-auto mr-auto">
        <CompanyIntro />
        <Employees />
      </div>
    </div>
  );
};

const CompanyIntro = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl text-green-500">Tailwind CSS company</h1>
      <p className="mt-4 text-red-900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vestibulum, blandit nisi sit amet, efficitur urna. Proin a arcu velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mollis, ligula id tempus placerat, tortor lorem porta neque, vitae porttitor dui nisl eget lorem. Curabitur et eros sagittis, sollicitudin augue ac, aliquet urna. Nam auctor semper mi rhoncus dapibus. Praesent varius maximus orci, et pretium felis varius nec. Sed sed lectus quam. Sed tempus eros at lectus lacinia, non placerat libero ultrices.
      </p>
    </div>
  );
};

const Employees = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl text-yellow-700">Employees</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((e, i) => {
          return (
            <EmployeeCard key={`employeeCard_${i}`} employee={e} />
          );
        })}
      </div>
    </div>
  );
};

const EmployeeCard = ({ employee: { image, name, department, title } }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="flex flew-row items-center">
        <div className={`w-16 h-16 rounded-full ${image}`}></div>
      </div>
      <div className="col-span-2">
        <div>{name}</div>
        <div>{department}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};

const employees = [
  {
    image: 'bg-yellow-700',
    name: 'Tanya Williams',
    department: 'Marketing',
    title: 'Head of Marketing',
  },
  {
    image: 'bg-green-600',
    name: 'Jay Andersson',
    department: 'Marketing',
    title: 'Art director',
  },
  {
    image: 'bg-blue-300',
    name: 'Nina Mumford',
    department: 'IT',
    title: 'Business analytic',
  },
  {
    image: 'bg-red-800',
    name: 'Jim Johnsson',
    department: 'Sales',
    title: 'Sales representative',
  },
];
