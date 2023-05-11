function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }

    return items;
}

export {choice, remove};