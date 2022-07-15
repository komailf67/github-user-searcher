type Tkeys = 'history';

export class LocalStorageHandler {
  isAvailable: boolean;

  constructor() {
    this.isAvailable = typeof window !== 'undefined';
  }

  getUsers(key: Tkeys): string[] | null {
    if (this.isAvailable) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : item;
    } else {
      return null;
    }
  }

  addNewUser(key: Tkeys, item: string) {
    let history = this.getUsers(key);
    if (this.isAvailable) {
      if (history) {
        const indexOfUser = history.indexOf(item);
        if (indexOfUser > -1) {
          history = this.moveItem(history, indexOfUser, 0);
        } else {
          history.push(item);
        }
        localStorage.setItem(key, JSON.stringify(history));
      } else {
        localStorage.setItem(key, JSON.stringify([item]));
      }
    }
  }

  clearAll() {
    if (this.isAvailable) {
      localStorage.clear();
    }
  }

  moveItem(array: string[], currentIndex: number, toIndex: number) {
    let itemRemoved = array.splice(currentIndex, 1);
    array.splice(toIndex, 0, itemRemoved[0]);
    return array;
  }
}
