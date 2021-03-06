---
title: "I Managed to Read the Bitcoin Whitepaper"
---

At some point in the last few months, I was following just three accounts on Twitter: [@Bitcoin](https://twitter.com/Bitcoin), [@coindesk](https://twitter.com/coindesk), and [@BTCFoundation](https://twitter.com/BTCFoundation). I wanted to learn more about Bitcoin, and following these accounts seemed like a good place to start, given that I waste so much time on Twitter.

But there were two flaws with my decision. First, I never quite understood Bitcoin. Second, I wasn't *actively* learning. It was just mindless news reading.

A few months passed by, and I finally took some action to solidify my understanding of Bitcoin. How? Well, I have a CS degree, and the little computer scientist inside me had been screaming:

> If you want to claim you understand Bitcoin, you must read the original [Satoshi Nakamoto paper](https://bitcoin.org/bitcoin.pdf)!

So I printed out the paper, took a selfie, and read it. It was surprisingly a quick read. I'm leaving my notes here in case someone finds them helpful.

<!--more-->

![Bitcoin Whitepaper](http://chibicode.com/assets/images/bitcoin-whitepaper/bitcoin-whitepaper.jpg)

## Disclaimer: My Prior Knowledge on Bitcoin

I'd never taken a cryptography course in college. I have a rough understanding of [RSA cryptography](http://en.wikipedia.org/wiki/RSA_(cryptosystem)) - I've taught a class which covered [Fermat's Little Theorem](http://en.wikipedia.org/wiki/Fermat%27s_little_theorem) and [the Chinese remainder theorem](http://en.wikipedia.org/wiki/Chinese_remainder_theorem).

My mental model for public key cryptography was roughly equivalent to what's explained in [this video](https://www.youtube.com/watch?v=GSIDS_lvRv4) and [this video](https://www.youtube.com/watch?v=Aq3a-_O2NcI).

As for how Bitcoin works, I've watched a few "for dummies" videos and read a few technical and non-technical explanations. The best semi-technical explanation I've found was on the article called: ["How the Bitcoin protocol actually works"](http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/).

As for why Bitcoin matters, I've read a ton of articles on this topic, but the ones I remember the most are ["Why Bitcoin Matters"](http://dealbook.nytimes.com/2014/01/21/why-bitcoin-matters/) by Marc Andreessen and ["Bitcoin: the Stripe perspective"](https://stripe.com/blog/bitcoin-the-stripe-perspective) by Greg Brockman (Stripe CTO). I also recommend [Bitcoin 2014's Keynote Address](https://www.youtube.com/watch?v=l--zHVO3Cik) by Dr. Byrne (Overstock.com CEO).

## My Notes for the Bitcoin Whitepaper

### Link to the Paper

Nakamoto, Satoshi (24 May 2009). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf). Retrieved 21 September 2014.

<a href="https://bitcoin.org/bitcoin.pdf" class="btn btn-primary"><i class="fa fa-download"></i>
Download PDF</a>

### 0. Abstract

The abstract states that the main focus of this paper is on how "to prevent double-spending" on a "purely peer-to-peer version of electronic cash." This will be done using "an ongoing chain of hash-based proof-of-work."

### 1. Introduction

The first half argues that a trusted third party is necessary to process electronic payments, which "increases transaction costs." It also criticizes that the traditional system does not allow for *irreversible* transactions. Embarrassingly, I didn't know that merchants are afraid of [chargeback fraud](http://en.wikipedia.org/wiki/Chargeback_fraud). I found this passage from [Bitcoin: A Primer for Policymakers](http://mercatus.org/publication/bitcoin-primer-policymakers) helpful (page 12):

> Accepting credit card payments also puts businesses on the hook for charge-back fraud. Merchants have long been plagued by fraudulent “charge-backs,” or consumer-initiated payment reversals based on a false claim that a product has not been delivered. Merchants therefore can lose the payment for the item and the item itself, and also have to pay a fee for the charge-back. As a non-reversible payment system, Bitcoin eliminates the “friendly fraud” wrought by the misuse of consumer charge-backs.

The second half is basically identical to the abstract section.

### 2. Transactions

It first illustrates "an electronic coin as a chain of digital signatures." The diagram is confusing, but here's my understanding of it:

Let's say A paid $1 to B, and B is about to pay this $1 to C.

C needs to verify that *somebody* passed this $1 to B, because otherwise B is paying C nonexistent money. Therefore, B needs to give C a piece of information which *proves* that *somebody* passed this $1 to B.

To do so, B will combine the transaction `A --$1--> B` and C's public key, hash it, and then sign it using B's private key.

C will use B's public key to decrypt the message, which results in the hash described above. C can verify that (1) `A --$1--> B` happened and (2) C was the recipient - by also computing the same hash herself and comparing the resulting hashes. If the two hashes are the same, C can be sure that (1) B owned the $1 and (2) C was the recipient.

The second half talks about how this scheme can't prevent owners from double-spending. [This video](https://www.youtube.com/watch?v=cOc7V64HUDQ) is a good (but preliminary) introduction to double-spending.

### 3. Timestamp Server

A timestamp server is a series of (hash, timestamp) pairs that is widely published. Each hash is computed from (1) a block of items and (2) the previous hash.

Let's say that each block contained N items. With a timestamp server, we can prove or disprove that items I<sub>1</sub> ... I<sub>n</sub> were contained in some block B<sub>i</sub> by computing the hash of I<sub>1</sub> ... I<sub>n</sub> and B<sub>i-1</sub> and comparing the resulting hashes. To recap: timestamp servers are good for existence checks.

### 4. Proof-of-Work

Before reading this section, I suggest you to head over to Khan Academy and watch [their videos on Bitcoin](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-transaction-records). In particular, watch:

- [Bitcoin: Transaction records](https://www.youtube.com/watch?v=9-9_v1wSPBQ)
- [Bitcoin: Proof of work](https://www.youtube.com/watch?v=9V1bipPkCTU)
- [Bitcoin: Transaction block chains](https://www.youtube.com/watch?v=QzDO44oZWtE)

The videos also explain that you always spend all of your money on a given Bitcoin transaction - by *paying yourself* the remainder of a transaction. I don't think this was explained on the whitepaper, but this concept is important.

If you're not familiar with SHA-256, also watch:

- [Bitcoin: Cryptographic hash functions](https://www.youtube.com/watch?v=0WiTaBI82Mc)

Once you've watched these videos, this section should be self-explanatory.

By the way, when the author mentions that an attacker may attempt to "change" or "modify" existing block chain, don't take this literally - the attacker isn't actually injecting malicious bits into an existing block. *Changing a block* actually means *creating a fake chain* that (1) contains manipulated blocks and (2) is longer than the existing chain, because this will force other nodes to accept this chain, making the correct chain obsolete and ultimately *rewriting* the history. So the word *rewriting* here is figurative.

Finally, the author makes a useful observation that proof-of-work is a mechanism that turns *one Bitcoin client per vote* to *one CPU power per vote*. As a summary, if:

- Validating transactions become more computationally costly,
- But those validations can be validated cheaply,
- And clients get rewarded for validations,
- And most computational power is honest,

then validating transactions will be fraud-free.

### 5. Network

This section is mostly a recap of section 4. Key new insights here are:

- "Nodes accept the block only if all transactions in it are valid and not already spent."
- "Nodes express their acceptance of the block by working on creating the next block in the chain."

### 6. Incentive

Before reading this section, watch these Khan Academy videos:

- [Bitcoin: The money supply](https://www.youtube.com/watch?v=JuWYLAtz3Y4)
- [Bitcoin: The security of transaction block chains](https://www.youtube.com/watch?v=8zgvzmKZ5vo)

The main idea is that if an attacker has enough CPU to out-run others, he'd probably be more profitable as a miner.

### 7. Reclaiming Disk Space

I had to do some Googling to understand this section. Merkle Tree ([Wikipedia](http://en.wikipedia.org/wiki/Merkle_tree)) is a method of computing the hash over multiple items. You first compute hashes of a pair of leaves, then compute hashes of the hashes on the next level, and repeat until you get the final, "root" hash.

Don't worry about the "pruning" diagram. Just know that (1) each block header contains just the root hash, and (2) most clients only store block headers to save space, but (3) the entire block must also be stored in some clients, for SPV to work correctly - see next.

### 8. Simplified Payment Verification

This was by far the most confusing section. Simplified Payment Verification (SPV) means answering the question: "Is transaction T<sub>3</sub> in the block B (given that their timestamps match)?" We'll be using T<sub>3</sub> and the block from the diagram on this section.

The client which performs SPV only has the block header for B, which is insufficient. So it must ask whichever client that happens to store the entire content of B to send over the *minimum* amount of information to re-compute the Merkle Root hash using T<sub>3</sub>.

(My mental model is that some clients store more information than others - some only store root hashes, but some store entire block contents. I could be wrong).

According to the diagram, the minimum required is Hash2 and Hash01 - with them, the requestor can compute the Merkle Root hash and compare it against B's Merkle Root hash. If they're the same, then T<sub>3</sub> is indeed inside the block B.

As you can see, the main benefit of using Merkle tree is that it reduces the amount of additional information the client needs to request, in order to verify whether a block contains a transaction. This reduction is logarithmic. To learn more, read [this article](https://en.bitcoin.it/wiki/Merged_mining_specification#Merkle_Branch).

### 9. Combining and Splitting Value

Re-watch above Khan Academy videos and remind yourself that one must spend all of his/her money on a transaction (by paying himself/herself a fraction). Then this section should somewhat make sense. I was also too lazy to learn what [fan-out](http://en.wikipedia.org/wiki/Fan-out) is.

### 10. Privacy

To learn about privacy and what other data is contained in a block, go inspect a *real* block online. [Blockexplorer](https://blockexplorer.com/) is useful, and I learned about it from [this video](https://www.youtube.com/watch?v=gUwXCt1qkBU).

### 11. Calculations

Didn't really bother reading this section, because it's intuitive that an attacker has an extremely low probability of catching up.

### 12. Conclusion

Nothing new here.

## That's it!

As mentioned previously, [How the Bitcoin protocol actually works](http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/) by Michael Nielsen is a great review.

Now onto reading [the bitcoin source](https://github.com/bitcoin/bitcoin)...
