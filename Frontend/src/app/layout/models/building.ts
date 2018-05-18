export class Building {
  id: string;
  name: string;
  head_building_id: string;
  faculty_id: string;
  head_building: {
    id: string,
    cc: string,
    first_name: string,
    last_name: string,
    email: string,
    buildingname: string,
    buildingid: string,
    facultyid: string,
    facultyname: string
  };
  faculty: {
    id: string,
    name: string
  };
}
