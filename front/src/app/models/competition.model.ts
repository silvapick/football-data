export class Competition {
  constructor(
    public id: number,
    public name: string,
    public code: string | null,
    public emblem_url: string | null,
    public plan: string | null,
    public area_id: number | null
  ) {}
}
