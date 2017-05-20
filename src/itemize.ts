import app = require("commander")
import Item from "./Models/Item.js"
import Slot from "./Models/Slot.js"
import ItemFactory from "./Infrastructure/ItemFactory.js"
import Inventory from "./Models/Inventory.js"

app.version('0.0.1')
    .arguments('<count>')
    .action(count => {

        const inventory = new Inventory();
        const itemFactory = new ItemFactory();
        
        for (let i = 0; i < count; i++) {
            inventory.addItem(itemFactory.makeItem());
        }
        
        console.log("You have:");
        console.log("");

        for (let slot of inventory.slots) {
            console.log(`  ${slot}`);
        }
    });

if (process.argv.length == 2) {
    process.argv.push("1");
}

app.parse(process.argv);
