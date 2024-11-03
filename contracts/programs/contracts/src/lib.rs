use anchor_lang::prelude::*;

declare_id!("2iKKWyDXJWeCdNdR88rAyPRLpDBWem1JyExrUCTwn4nL");

#[program]
pub mod contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
