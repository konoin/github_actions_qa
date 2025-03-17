import CheckBox from "sap/m/CheckBox";
import Descendant from "sap/ui/test/matchers/Descendant";
import { wdi5Selector } from "wdio-ui5-service";

export class MainPage {
  public static get addTodoItemInput(): wdi5Selector {
    return {
      selector: {
        id: "addTodoItemInput",
        viewName: "sap.m.sample.TsTodos.webapp.view.App",
      },
    };
  }

  public static get searchTodoItemsInput(): wdi5Selector {
    return {
      selector: {
        id: "searchTodoItemsInput",
        viewName: "sap.m.sample.TsTodos.webapp.view.App",
      },
    };
  }

  public static allButton(): wdi5Selector {
    return {
      selector: {
        controlType: 'sap.m.Button',
        id: '__item0-button'
      }
    }
  }

  public static activeButton(): wdi5Selector {
    return {
      selector: {
        controlType: 'sap.m.Button',
        id: '__item1-button'
      }
    }
  }

  public static compleateButton(): wdi5Selector {
    return {
      selector: {
        controlType: 'sap.m.Button',
        id: '__item2-button'
      }
    }
  }

  public static taskText(text: string): wdi5Selector {
    return {
      selector: {
        controlType: 'sap.m.CustomListItem',
        descendant: {
          controlType: 'sap.m.HBox',
          descendant: {
            controlType: 'sap.m.VBox',
            descendant: {
              controlType: 'sap.m.Text',
              properties: {
                text: text,
              }
            }
          },
        }
      }
    }
  }

  public static testCheckBox(id: string): wdi5Selector {
    return {
      selector: {
        controlType: 'sap.m.CheckBox',
        id: `__box0-__clone${id}`
      }
    }
  }

  public static getLastCharacter(str: string): string {
    if (str.length === 0) {
      return ''
    }
    return str.charAt(str.length - 1);
  }
}