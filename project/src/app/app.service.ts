import { Injectable } from '@angular/core';

export class Data {
  id !: number;
  postId !: number;
  name !: string;
  email !: string;
  body !: string
}

let data: Data[] = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in",
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body: "maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor",
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body: "ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque",
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body: "sapiente assumenda molestiae atque adipisci laborum distinctio aperiam et ab ut omnis et occaecati aspernatur odit sit rem expedita quas enim ipsam minus",
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla quia quas dolores velit et non aut quia necessitatibus nostrum quaerat nulla et accusamus nisi facilis",
  },
  {
    postId: 3,
    id: 11,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
    body: "ut dolorum nostrum id quia aut est fuga est inventore vel eligendi explicabo quis consectetur aut occaecati repellat id natus quo est ut blanditiis quia ut vel ut maiores ea",
  },
  {
    postId: 3,
    id: 12,
    name: "modi ut eos dolores illum nam dolor",
    email: "Oswald.Vandervort@leanne.org",
    body: "expedita maiores dignissimos facilis ipsum est rem est fugit velit sequi eum odio dolores dolor totam occaecati ratione eius rem velit",
  },
  {
    postId: 3,
    id: 13,
    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
    email: "Kariane@jadyn.tv",
    body: "fuga eos qui dolor rerum inventore corporis exercitationem corporis cupiditate et deserunt recusandae est sed quis culpa eum maiores corporis et",
  },
  {
    postId: 3,
    id: 14,
    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    email: "Nathan@solon.io",
    body: "vel quae voluptas qui exercitationem voluptatibus unde sed minima et qui ipsam aspernatur expedita magnam laudantium et et quaerat ut qui dolorum",
  },
  {
    postId: 3,
    id: 15,
    name: "debitis magnam hic odit aut ullam nostrum tenetur",
    email: "Maynard.Hodkiewicz@roberta.com",
    body: "nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium deserunt molestias tempora quo quia",
  },
  {
    postId: 4,
    id: 16,
    name: "perferendis temporibus delectus optio ea eum ratione dolorum",
    email: "Christine@ayana.info",
    body: "iste ut laborum aliquid velit facere itaque quo ut soluta dicta voluptate error tempore aut et sequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
  },
  {
    postId: 4,
    id: 17,
    name: "eos est animi quis",
    email: "Preston_Hudson@blaise.tv",
    body: "consequatur necessitatibus totam sed sit dolorum recusandae quae odio excepturi voluptatum harum voluptas quisquam sit ad eveniet delectus doloribus odio qui non labore",
  },
  {
    postId: 4,
    id: 18,
    name: "aut et tenetur ducimus illum aut nulla ab",
    email: "Vincenza_Klocko@albertha.name",
    body: "veritatis voluptates necessitatibus maiores corrupti neque et exercitationem amet sit et ullam velit sit magnam laborum magni ut molestias",
  },
  {
    postId: 4,
    id: 19,
    name: "sed impedit rerum quia et et inventore unde officiis",
    email: "Madelynn.Gorczany@darion.biz",
    body: "doloribus est illo sed minima aperiam ut dignissimos accusantium tempore atque et aut molestiae magni ut accusamus voluptatem quos ut voluptates quisquam porro sed architecto ut",
  },
  {
    postId: 4,
    id: 20,
    name: "molestias expedita iste aliquid voluptates",
    email: "Mariana_Orn@preston.org",
    body: "qui harum consequatur fugiat et eligendi perferendis at molestiae commodi ducimus doloremque asperiores numquam qui ut sit dignissimos reprehenderit tempore",
  }
];

@Injectable()
export class Service {
  getData() {
    return data;
  }
}