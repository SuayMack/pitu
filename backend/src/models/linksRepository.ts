import linkModel, { ILinkModel } from './linkModel';
import { Link } from './link';

function findByCode(code: string){//insert sql
    return linkModel.findOne<ILinkModel>({ where: { code } });
}

function add(link: Link){
    return linkModel.create<ILinkModel>(link);//create sql
}

async function hit(code: string){
    const link = await findByCode(code);
    if(!link) return null;

    link.hits!++;
    await link.save();//update sql
    return link;
}

export default {
    findByCode,
    add,
    hit
}