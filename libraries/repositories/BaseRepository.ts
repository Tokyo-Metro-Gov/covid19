export interface IBaseRepository<T> {
  data: T
}

export abstract class BaseRepository<T> {
  public readonly data: T

  protected constructor(data: T) {
    this.data = data
  }
}
