export class Team{

  constructor(
    public id: number,
    public areaId: number | null,
    public name: string,
    public short_name: string | null,
    public tla: string,
    public address: string | null,
    public website: string | null,
    public founded: string | null,
    public club_colors: string | null,
    public venue: string | null
  ) {}
}
