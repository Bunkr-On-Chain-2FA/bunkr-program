/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  AuthenticationObject,
  authenticationObjectBeet,
} from '../types/AuthenticationObject'

/**
 * @category Instructions
 * @category UnlockFungible
 * @category generated
 */
export type UnlockFungibleInstructionArgs = {
  amount: beet.bignum
  authenticationObject: AuthenticationObject
}
/**
 * @category Instructions
 * @category UnlockFungible
 * @category generated
 */
export const unlockFungibleStruct = new beet.FixableBeetArgsStruct<
  UnlockFungibleInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['amount', beet.u64],
    ['authenticationObject', authenticationObjectBeet],
  ],
  'UnlockFungibleInstructionArgs'
)
/**
 * Accounts required by the _unlockFungible_ instruction
 *
 * @property [_writable_] fromAssociatedTokenAccount
 * @property [] tokenMint
 * @property [_writable_] toAssociatedTokenAccount
 * @property [] withdrawalAddress
 * @property [_writable_, **signer**] signer
 * @property [_writable_] bunkr
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category UnlockFungible
 * @category generated
 */
export type UnlockFungibleInstructionAccounts = {
  fromAssociatedTokenAccount: web3.PublicKey
  tokenMint: web3.PublicKey
  toAssociatedTokenAccount: web3.PublicKey
  withdrawalAddress: web3.PublicKey
  signer: web3.PublicKey
  bunkr: web3.PublicKey
  tokenProgram?: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const unlockFungibleInstructionDiscriminator = [
  235, 119, 179, 242, 60, 244, 4, 48,
]

/**
 * Creates a _UnlockFungible_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UnlockFungible
 * @category generated
 */
export function createUnlockFungibleInstruction(
  accounts: UnlockFungibleInstructionAccounts,
  args: UnlockFungibleInstructionArgs,
  programId = new web3.PublicKey('BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2')
) {
  const [data] = unlockFungibleStruct.serialize({
    instructionDiscriminator: unlockFungibleInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.fromAssociatedTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toAssociatedTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.withdrawalAddress,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.bunkr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
