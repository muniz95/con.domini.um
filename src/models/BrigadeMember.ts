import { isConstructorDeclaration } from "typescript";

class BrigadeMember {
  public id?: number;
  public name?: string;
  public category?: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.category = params.category;
  }
}

export default BrigadeMember;
