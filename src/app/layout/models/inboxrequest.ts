export class InboxRequest {
  id: string;
  state: string;
  times: [
    {
      id: string;
      date: string;
      begin_at: string;
      end_at: string;
    }
    ];
  purpose_classroom: string;
  type_classroom: string;
  motive: string;
  teacher: {
    id: string;
    cc: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string
  };
}
