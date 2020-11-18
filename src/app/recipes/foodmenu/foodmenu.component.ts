import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs/Observable';
import * as fromRecipe from '../store/recipe.reducers';
import * as fromCategoy from '../store/category.reducers';
import { tap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { Category } from '../category.model';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  categories = [];
  products = [];



  editMode = true;
  showLayoutBorderColorPicker = false;
  showCategoryTextColorPicker2 = false;
  showContentTextColorPicker = false;

  strEditMode = "Düzenle";

  json = {
    categories: [],
    layout: "Masonry2Col",
    contentLayout: "ClassicList1Col",
    showDivider: true,
    showPrice: false,
    showDescription: true,
    showImage: true,

    padding: 20,
    layoutBorderColor: "transparent",
    categoryHeight: 150,
    categoryTextAlign: "left",
    categoryTextColor: "#642424",
    categoryTextSize: 36,
    contentCentered: false,
    imageSize: 60,
    contentTextColor: "#B26D6D",
    contentTextSize: 18
  };


  constructor(private store: Store<fromRecipe.FeatureState>, private storeCategory: Store<fromCategoy.FeatureState>) {
  }

  ngOnInit() {
    try{
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: fromRecipe.State) => {
        this.products = recipeState.recipes;
        this.storeCategory.select('categories')
          .take(1)
          .subscribe((categoryState: fromCategoy.State) => {
            this.categories = categoryState.categories;
            let self = this;
            _.map(this.categories, function (cat) {
              cat["products"] = [];
              _.map(self.products, function (product: any) {
                if (cat.id == product.category) {
                  cat["products"].push(product);
                }
              });
            });

          });
      });
    }catch (err) {
      console.log(err);
      this.products =  [
    new Recipe(
      '1',
      'Smoked Beef',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
      ),
    new Recipe('2','DANA CARPACCIO',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','SMOKED RIB EYE',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('4','GRILLED SHRIMP',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('5','STEAK TARTAR',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('6','ROCKET SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('7','GOAT CHEESE SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('8','TOMATO SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('9','AVOCADO SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('3','MEAT BALL',
      '3',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','MEAT SHIELD',
      '3',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','STEAK OF WEEK',
      '4',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','STEAK THE MAGNIFICENT',
      '4',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','BEEF FOR THE WIN',
      '5',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','KING OF THE BEEF',
      '5',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),

      new Recipe('3','ONE BURGER TO RULE EM ALL',
      '6',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','MEH GARNISH',
      '7',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','DESSERTED',
      '8',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','BAKLAVA',
      '8',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
  ];

  this.categories= [
    new Category(
      '1',
      'Starters'
    ),
    new Category(
      '2',
      'Salads'
    ),
    new Category(
      '3',
      'Meats'
    ),
    new Category(
      '4',
      'Steaks'
    ),
    new Category(
      '5',
      'Beef Filets'
    ),
    new Category(
      '6',
      'Burgers'
    ),
     new Category(
      '7',
      'Garnish'
    ),
      new Category(
      '8',
      'Dessert'
    ),
  ];

  const self = this;
            _.map(this.categories, function (cat) {
              cat["products"] = [];
              _.map(self.products, function (product: any) {
                if (cat.id == product.category) {
                  cat["products"].push(product);
                }
              });
            });

    }

  }


  public resetBorderColorIfZero(event) {
    if (event.target.value == 0) {
      this.json.layoutBorderColor = "transparent"
    }
  };

  public toggleColorPicker(val: string) {
    if (val == "CategoryTextColorPicker") {
      this.showCategoryTextColorPicker2 = !this.showCategoryTextColorPicker2;
      this.showContentTextColorPicker = false;
      this.showLayoutBorderColorPicker = false;
    } else if (val == "ContentTextColorPicker") {
      this.showContentTextColorPicker = !this.showContentTextColorPicker;
      this.showCategoryTextColorPicker2 = false;
      this.showLayoutBorderColorPicker = false;
    } else if (val == "LayoutBorderColorPicker") {
      this.showLayoutBorderColorPicker = !this.showLayoutBorderColorPicker;
      this.showCategoryTextColorPicker2 = false;
      this.showContentTextColorPicker = false;
    }
  };

  public rgbaColor(hex: string, rgba: number) {
    if (_.isEmpty(hex) || rgba == undefined) {
      return "transparent";
    }
    try {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
          "," +
          rgba +
          ")"
        );
      }
    } catch (error) {
      console.log("Bad hex color:" + hex);
      return "transparent";
    }

    //throw new Error('Bad Hex');
  };

 public categoryHeaderStyle(cat: any) {
    let self = this;


    let style = {
      height: self.json.categoryHeight + "px",
      //"background-image": 'url(' + cat.backgroundImage + ')',
      //"background-size": "cover",
      "margin-left": "-20px",
      "margin-right": "-20px",
      "margin-top": "-20px",
      //"margin-bottom": "-5px",
      "margin-bottom": "15px",
      "padding-left": "15px",
      "padding-top": "5px",
      // "border-bottom": "1px solid #efefef",
      display: "flex",

      "flex-wrap": "wrap",
      "background-image": "none",
      "border-top-right-radius": "5px",
      "border-top-left-radius": "5px"
      //"background-color": "transparent",
    };

    style["border-bottom"] =
      "0.5px solid " + this.rgbaColor(this.json.contentTextColor, 0.2);

    style["justify-content"] = "center";
    style["flex-direction"] = "column";

    if (this.json.categoryTextAlign == "center") {
      style["align-items"] = "center";
    } else if (this.json.categoryTextAlign == "left") {
      style["align-items"] = "flex-start";
    } else if (this.json.categoryTextAlign == "right") {
      style["align-items"] = "flex-end";
    }

    if (cat != null) {
      if (!cat.settingsForWholeCategory) {
        if (cat.backgroundColor != "") {
          var str = "";
          str =
            "linear-gradient(90deg," +
            this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
            "," +
            this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
            ")";
          if (cat.backgroundImage != "") {
            str =
              "linear-gradient(90deg," +
              this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
              "," +
              this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
              "), " +
              "url(" +
              cat.backgroundImage +
              ")";
          }
          style["background-image"] = str;
        } else {
          if (cat.backgroundImage != "") {
            style["background-image"] = "url(" + cat.backgroundImage + ")";
          }
        }
        console.log(style["background-image"]);
        //style["background-image"] = 'linear-gradient(90deg,' + this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) + ',' + this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) + '), ' + 'url(' + cat.backgroundImage + ')';
        //style["background-color"] = cat.backgroundColor;
        style["background-size"] = "cover";
        style["background-position"] = "50% center";
      } else {
        if (cat.textColor != "") {
          style["border-bottom"] =
            "0.5px solid " + this.rgbaColor(cat.textColor, 0.3);
        }
        style["background-image"] = "none";
      }
    }
    return style;
  };

  public categoryWrapperClass(cat: any) {
    var myclass = [];
    myclass.push("notification");
    myclass.push(this.json.contentLayout);
    if (cat != null) {
      if (cat.settingsForWholeCategory) {
        if (cat.enableParallax) {
          myclass.push("paraxify")
        }
      }
    }

    return myclass;
  };

  public categoryHeaderClass(cat) {
    var myclass = [];
    myclass.push("categoryHeader");
    if (cat != null) {
      if (!cat.settingsForWholeCategory) {
        if (cat.enableParallax) {
          myclass.push("paraxify")
        }
      }
    }

    return myclass;
  };

public test(){
 return 'ayse';
};
  public categoryWrapperStyle(cat) {
    var self = this;
    var style = {};
    style["background-image"] = "none";
    style["background-color"] = "white";
    if (cat != null) {
      if (cat.settingsForWholeCategory) {
        if (cat.backgroundColor != "") {
          var str = "";
          str =
            "linear-gradient(90deg," +
            this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
            "," +
            this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
            ")";
          if (cat.backgroundImage != "") {
            str =
              "linear-gradient(90deg," +
              this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
              "," +
              this.rgbaColor(cat.backgroundColor, cat.backgroundColorAlpha) +
              "), " +
              "url(" +
              cat.backgroundImage +
              ")";
          }
          style["background-image"] = str;
        } else {
          if (cat.backgroundImage != "") {
            style["background-image"] = "url(" + cat.backgroundImage + ")";
          }
        }

        style["background-size"] = "cover";
        style["background-position"] = "50% center";
      } else {
        style["background-image"] = "none";
      }
    }
    return style;
  };

  public categoryTextStyle(cat) {
    var self = this;
    var style = {};

    if (this.json.categoryTextAlign == "center")
      style = {
        //"align-self": "center",
        //"justify-self": "center",
        "margin-right": "5px",
        color: this.json.categoryTextColor,
        "font-size": this.json.categoryTextSize + "px"
      };
    else if (this.json.categoryTextAlign == "left") {
      style = {
        //"align-self": "center",
        //"justify-self": "flex-start",
        "margin-right": "5px",
        color: this.json.categoryTextColor,
        "font-size": this.json.categoryTextSize + "px"
      };
    } else if (this.json.categoryTextAlign == "right") {
      style = {
        //"align-self": "center",
        //"justify-self": "flex-end",
        "margin-right": "5px",
        color: this.json.categoryTextColor,
        "font-size": this.json.categoryTextSize + "px"
      };
    }
    if (cat != null) {
      if (cat.textColor != "") {
        style["color"] = cat.textColor;
      }
    }

    return style;
  };

  public priceLineStyle(cat) {
    var style = {};
    style["border-bottom"] = "none";
    style["font-size"] = this.json.contentTextSize + "px";

    if (this.json.showPrice) {
      style["border-bottom"] =
        "0.5px dashed " + this.rgbaColor(this.json.contentTextColor, 0.15);
      if (cat != null) {
        if (cat.settingsForWholeCategory && cat.textColor != "") {
          style["border-bottom"] =
            "0.5px dashed " + this.rgbaColor(cat.textColor, 0.3);
        }
      }
    }

    return style;
  };

  public layoutClass() {
    var style = {};
    style[this.json.contentLayout] = true;
    style["notification"] = true;


    return style;
  };

  public imageStyle(product) {

    var style = {};


    if (this.json.contentLayout == 'BigPicture1Col' || this.json.contentLayout == 'BigPicture2Col') {
      style["background-image"] = "url(" + product.imagePath + ")";
      style["background-size"] = "cover";
      style["background-position"] = "50% center";
      style["-webkit-border-radius"] = "5px";
      style["border-radius"] = "5px";
      style["-moz-border-radius"] = "5px";
      style["border"] = "none";
      style["min-height"] = this.json.imageSize + "px";
      style["width"] = '100%';
      //v-bind:style="{ 'width': json.imageSize + 'px', 'height':json.imageSize +'px' }"
    } else {
      style["width"] = this.json.imageSize + 'px';
    }

    return style;

  };

  public dividerStyle(cat: any) {
    var style = {};

    style["border"] =
      "0.5px solid " + this.rgbaColor(this.json.contentTextColor, 0.04);

    if (cat != null) {
      if (cat.settingsForWholeCategory && cat.textColor != "") {
        style["border"] = "0.5px solid " + this.rgbaColor(cat.textColor, 0.1);
      }
    }

    return style;
  };

  public descTextStyle(cat: any) {
    var style = {};
    style["color"] = this.rgbaColor(this.json.contentTextColor, 0.9);
    style["font-size"] = this.json.contentTextSize * 3 / 4 + "px";

    if (cat != null) {
      if (cat.settingsForWholeCategory && cat.textColor != "") {
        style["color"] = this.rgbaColor(cat.textColor, 0.9);
      }
    }

    return style;
  };

  public contentTextStyle(cat: any) {
    var self = this;
    var style = {};
    style["color"] = this.json.contentTextColor;

    if (cat != null) {
      if (cat.settingsForWholeCategory && cat.textColor != "") {
        style["color"] = cat.textColor;
      }
    }

    return style;
  };

  public getCategoryInfoFromJson(category_id: string) {
    var self = this;
    var category = null;
    _.map(this.json.categories, function (cat) {
      if (cat.id == category_id) {
        category = cat;
      }
    });

    return category;
  };



  public updateLayoutBorderColor(val: any) {
    this.json.layoutBorderColor = val.hex;
  };

  public updateCategoryTextColor(val: any) {
    this.json.categoryTextColor = val.hex;
  };

  public updateContentTextColor(val: any) {
    this.json.contentTextColor = val.hex;
  };

  public switchEditMode(event) {
    this.editMode = !this.editMode;

    if (this.editMode) {
      this.strEditMode = "Düzenlemeyi bitir";
    } else {
      this.strEditMode = "Düzenle";
    }
  };

}
