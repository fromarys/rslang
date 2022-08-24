export interface ICreator<NodeType extends HTMLElement = HTMLElement> {
  node: NodeType;
  destroy(): void;
}
