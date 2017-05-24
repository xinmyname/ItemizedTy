import app = require("commander")
import Item from "./Models/Item"
import Slot from "./Models/Slot"
import ItemFactory from "./Infrastructure/ItemFactory"
import Inventory from "./Models/Inventory"

app.version('0.0.1')
    .arguments('<count>')
    .action(count => {

        const inventory = new Inventory();
        const itemFactory = new ItemFactory();
        
        for (let i = 0; i < count; i++) {
            inventory.addItem(itemFactory.makeItem());
        }
        
        console.log("You have:");

        for (let slot of inventory.slots) {
            console.log(`  ${slot}`);
        }
    });

if (process.argv.length == 2) {
    process.argv.push("1");
}

app.parse(process.argv);
