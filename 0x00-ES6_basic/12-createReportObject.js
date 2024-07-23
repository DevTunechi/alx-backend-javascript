export default function createReportObject(employees) {
  return {
    allEmployees: employees,
    getNumberOfDepartments: () => Object.keys(employees).length,
  };
}
