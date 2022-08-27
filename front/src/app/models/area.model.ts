export class Area{

  constructor(
    public id: number,
    public name: string,
    public country_code: string | null,
    public flag: string | null,
    public parent_area_id: number | null,
    public parent_area: string | null
  ) {}
}
