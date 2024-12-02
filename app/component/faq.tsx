import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="container mx-auto max-w-5xl px-4 my-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How Long Has Fateshop Been the Leading Provider of Top-Tier Gaming
            Cheats?
          </AccordionTrigger>
          <AccordionContent>
            Since its founding in 2020, Fateshop has established itself as a
            premier destination for gamers worldwide, delivering exceptional
            cheats that have aided over 20,000, in dominating their favorite
            games. As the ultimate source for superior gaming cheats for every
            game imaginable, we invite you to join our expansive community today
            and gain access to the best cheats the market has to offer.
            Experience the Fateshop difference and elevate your gaming prowess
            to new heights!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Why Choose Fate Shop? Discover the Excellence Behind Our Gaming
            Cheats
          </AccordionTrigger>
          <AccordionContent>
            What sets Fate Shop apart is our unwavering commitment to customer
            satisfaction and quality. With round-the-clock support and an
            impressive track record of over 20,000 five-star ratings, our
            priority is resolving your queries and issues swiftly and
            effectively. At Fate Shop, we pride ourselves on offering only the
            finest products — every cheat we sell has been rigorously tested and
            is fully endorsed by our team. This means when you choose Fate Shop,
            you're not just purchasing a product; you're investing in a solution
            we believe in and stand behind 100%. Our customers say it all!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Need Assistance? Here's How to Access Our 24/7 Support
          </AccordionTrigger>
          <AccordionContent>
            For unparalleled support at any hour, join our vibrant community on
            Discord. The Fate Shop Support Team is available around the clock,
            ready to assist you with any inquiries or challenges you might face.
            We pride ourselves on our swift response times, ensuring you receive
            the help you need promptly. Connect with us on Discord today for all
            your support needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
