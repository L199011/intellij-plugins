@Component({
    selector: 'my-customer',
    template: `<div><<caret></div>`
    properties: {
        'id':'dependency'
    }
})
class Dependency {
    id:string;
}